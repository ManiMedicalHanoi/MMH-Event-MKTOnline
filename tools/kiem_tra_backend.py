#!/usr/bin/env python3
"""Đối chiếu app ⇄ backend — chỉ đọc code, KHÔNG gọi máy chủ, không đọc dữ liệu thật.
Mọi lệnh (action) và thao tác ghi (ehSave op) app gọi phải có chỗ xử lý trong backend; máy chủ giả lập demo.js phải có đủ.
  python3 tools/kiem_tra_backend.py <thư mục mmh-backend/backends>
  (mmh-backend: git clone https://github.com/ManiMedicalHanoi/mmh-backend — kho công khai)
Backend: marketing (Event Hub: index.html + doi-tac.html) · training (đăng nhập). Kết quả cuối: số chỗ THIẾU (0 = khớp)."""
import re, glob, os, sys
APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BE = sys.argv[1] if len(sys.argv) > 1 else os.path.join(APP, '..', 'mmh-backend', 'backends')
if not os.path.isdir(os.path.join(BE, 'marketing')): sys.exit('Không thấy ' + BE + '/marketing — truyền đường dẫn tới mmh-backend/backends')
app = open(APP + '/index.html', encoding='utf-8').read() + open(APP + '/ui2.js', encoding='utf-8').read()
partner = open(APP + '/doi-tac.html', encoding='utf-8').read()
demo = open(APP + '/demo.js', encoding='utf-8').read()
mk = {f.split('/')[-1]: open(f, encoding='utf-8').read() for f in glob.glob(BE + '/marketing/*.gs')}
tr = {f.split('/')[-1]: open(f, encoding='utf-8').read() for f in glob.glob(BE + '/training/*.gs')}
MK = '\n'.join(mk.values()); TR = '\n'.join(tr.values())

# 1) action gửi tới backend marketing: api("x", …)
acts = sorted(set(re.findall(r'\bapi\(\s*"([A-Za-z0-9_]+)"', app)))
acts_partner = sorted(set(re.findall(r'action:\s*"([A-Za-z0-9_]+)"', partner)))
# 2) op của ehSave: op: "a.b" (kể cả op: x ? "a" : "b")
ops = set()
for m in re.finditer(r'op:\s*([^,}]{1,160})', app):
    ops.update(re.findall(r'"([a-z]+\.[a-zA-Z]+)"', m.group(1)))
for m in re.finditer(r'"ehSave",\s*\{\s*op:\s*"([a-zA-Z.]+)"', app): ops.add(m.group(1))
ops.update(x for x in re.findall(r'"((?:event|task|comment|note|file|link|checkin|cfg|partner|rules|reg|notice|apv|week|status)\.[a-zA-Z]+)"', app))
ops = sorted(ops)
# 3) action gửi Training Hub: AUTH.hub("x") / AUTH.post("x")
hub = sorted(set(re.findall(r'AUTH\.(?:hub|post)\(\s*"([A-Za-z0-9_]+)"', app)))

def where(name, src_files, pats):
    hits = []
    for fn, s in src_files.items():
        for p in pats:
            if re.search(p.format(re.escape(name)), s): hits.append(fn); break
    return hits

res = {'marketing_actions': [], 'partner_actions': [], 'ehSave_ops': [], 'hub_actions': []}
for a in acts:
    h = where(a, mk, [r"case\s*'{0}'", r"action\s*===?\s*'{0}'", r"'{0}'\s*:", r"\b{0}\s*:\s*\{{", r"a\s*===?\s*'{0}'"])
    d = bool(re.search(r"['\"]" + re.escape(a) + r"['\"]", demo))
    res['marketing_actions'].append((a, h, d))
for a in acts_partner:
    res['partner_actions'].append((a, where(a, mk, [r"case\s*'{0}'", r"action\s*===?\s*'{0}'", r"'{0}'\s*:"]), None))
for o in ops:
    h = where(o, mk, [r"op\s*===?\s*'{0}'", r"'{0}'\s*:", r"case\s*'{0}'"])
    d = bool(re.search(r"op\s*===?\s*['\"]" + re.escape(o) + r"['\"]", demo)) or ("'" + o + "'" in demo) or ('"' + o + '"' in demo)
    res['ehSave_ops'].append((o, h, d))
for a in hub:
    res['hub_actions'].append((a, where(a, tr, [r"'{0}'\s*:\s*\{{fn", r"case\s*'{0}'"]), None))

bad = 0
for k, rows in res.items():
    print('\n## ' + k + ' (' + str(len(rows)) + ')')
    for name, h, d in rows:
        ok = bool(h); bad += (not ok)
        print(('  OK   ' if ok else '  THIẾU') + ' ' + name.ljust(22) + ' backend: ' + (', '.join(h) if h else '—') + ('' if d is None else ('  · demo.js: ' + ('có' if d else 'KHÔNG'))))
print('\nTổng chỗ app gọi mà backend không thấy xử lý:', bad)
sys.exit(1 if bad else 0)
