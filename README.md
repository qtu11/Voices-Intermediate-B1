# Voices-Intermediate-B1 Study Companion (EnglishB1)

He thong ho tro on tap va luyen thi toan dien danh cho giao trinh Voices Intermediate B1 (Units 5 den 10), tich hop cong nghe AI va giao dien hoc tap truc quan.

---

## Muc luc

- Tong quan du an
- Tinh nang noi bat
- Cac phan he hoc tap
- Kien truc cong nghe
- Cau truc thu muc
- Yeu cau he thong va Cai dat
- Bien moi truong
- Danh sach lenh thuc thi
- Huong dan phat trien tiep theo

---

## Tong quan du an

Voices B1 Study Companion duoc thiet ke nham phuc vu nguoi hoc on luyen ky thi tieng Anh trinh do B1 theo khung tham chieu chau Au (CEFR), tap trung vao nua sau cua giao trinh Voices Intermediate (Units 5 - 10). 

Ung dung cung cap moi truong hoc tap da phuong tien: tu luyen nho tu vung qua Flashcard 3D, nghe phat am ban xu thoi gian thuc, tong hop cong thuc va canh bao bay de thi ngu phap, den luyen de trac nghiem bam gio 50 phut co giai thich chi tiet va doc hieu song ngu Anh - Viet.

---

## Tinh nang noi bat

- 165 tu vung chuan B1 chia theo 6 don vi bai hoc, co phien am IPA, dinh nghia, vi du ngu canh va cum tu di kem (collocations).
- Ho tro phat am tu dong voi Web Speech API (Text-to-Speech) truc tiep tren trinh duyet khong can ket noi dich vu ben thu ba.
- 12 chu diem ngu phap trong tam kem phan tich chuyen sau ve "Bay de thi thuong gap" giup han che toi da loi sai khi lam bai.
- Ngan hang 200 cau hoi trac nghiem co dap an va giai thich ly do dung/sai chi tiet.
- 3 che do luyen thi linh hoat: Luyen theo tung Unit, Luyen tap tu do khong gioi han thoi gian, va Thi thu bam gio 50 phut chuan format de thi quoc te voi thang diem quy doi 10.
- 09 bai doc hieu phan tich chuyen sau, ho tro xem song ngu Anh - Viet va nghe audio toan van.
- Giao dien toi uu hieu nang cao voi Next.js 15 App Router, React 19 va Tailwind CSS the he 4.

---

## Cac phan he hoc tap

### 1. Kho tu vung (Vocabulary - `/vocabulary`)
- The hoc tu (Flashcard) lat mat 3D voi hieu ung chuyen dong muot ma.
- Tich hop nut nghe phat am chuan ban xu.
- Bo loc tu vung theo tung Unit (Unit 5 den Unit 10) va thanh tim kiem thoi gian thuc theo tu khoa, loai tu, nghia tieng Viet.
- Danh dau tu da hoc de quan ly tien do on tap.

### 2. He thong ngu phap (Grammar - `/grammar`)
Tong hop 12 chu diem ngu phap cua giao trinh:
- Unit 5: Second Conditional (Cau dieu kien loai 2), Tinh tu duoi -ed va -ing.
- Unit 6: Present Perfect Continuous (Thi hien tai hoan thanh tiep dien), Gioi tu chi chuyen dong.
- Unit 7: Future Forms (Cac hinh thuc dien dat tuong lai), Verb Patterns (Dong tu theo sau boi V-ing hoac To-V).
- Unit 8: Relative Clauses (Menh de quan he xac dinh va khong xac dinh), Cap so sanh (Comparatives & Superlatives).
- Unit 9: Third Conditional (Cau dieu kien loai 3), Mau cau dua ra loi khuyen va de xuat.
- Unit 10: Passive Voice (Cau bi dong), Du doan va kha nang voi dong tu khuyet thieu.
Moi chu diem deu gom: Cong thuc tong quat, cach dung, vi du thuc te va chuyen muc "Bay de thi" (Exam Traps).

### 3. Phong luyen thi (Quizzes - `/quizzes`)
- Che do Hoc theo Unit: Tap trung kiem tra kien thuc tung phan tu Unit 5 toi Unit 10.
- Che do Luyen tap tu do: Hien thi ngay dap an dung va loi giai thich chi tiet ngay sau khi chon phuong an.
- Che do Thi thu 50 phut: Mo phong ap luc phong thi voi bo dem thoi gian thuc, tu dong thu bai khi het gio, thong ke ty le dung/sai va cham diem thang 10.

### 4. Doc hieu song ngu (Reading Comprehension - `/reading`)
- Tong hop 09 doan van doc hieu dai duoc trich xuat tu giao trinh goc.
- Che do chuyen doi song ngu linh hoat (Tieng Anh / Song ngu Anh - Viet).
- Giong doc van ban giup ren luyen ky nang nghe ket hop doc.
- Cau hoi kiem tra do hieu kem trich dan truc tiep dan chung trong bai.

### 5. Chi tiet Unit & Bang tra tu (Units `/unit/[unit]` & Wordlist `/wordlist`)
- Giao dien tap trung toan bo tai lieu, tu vung, ngu phap va bai tap cua tung bai hoc.
- Bang tra cuu tong hop toan bo tu vung phuc vu viec tra cuu nhanh.

---

## Kien truc cong nghe

| Thanh phan | Cong nghe su dung | Phien ban |
|---|---|---|
| Framework | Next.js (App Router) | 15.4.9 |
| Core Library | React / React DOM | 19.2.1 |
| Language | TypeScript | 5.9.3 |
| Styling Engine | Tailwind CSS | 4.1.11 |
| Animation | Motion (Framer Motion) | 12.23.24 |
| Icon System | Lucide React | 0.553.0 |
| AI Integration | Google GenAI SDK | 2.4.0 |
| Voice Engine | Web Speech API (HTML5 SpeechSynthesis) | Native Browser |

---

## Cau truc thu muc

```
EnglishB1/
├── app/                              # Next.js App Router
│   ├── globals.css                   # Cau hinh Style toan cuc & bien Tailwind CSS
│   ├── layout.tsx                    # Layout goc tich hop AppShell va Sidebar
│   ├── page.tsx                      # Trang chu (Dashboard tong quan & thong ke)
│   ├── grammar/                      # Phan he hoc Ngu phap
│   │   └── page.tsx
│   ├── quizzes/                      # Phan he Luyen thi trac nghiem
│   │   └── page.tsx
│   ├── reading/                      # Phan he Doc hieu song ngu
│   │   └── page.tsx
│   ├── unit/                         # Phan he chi tiet theo tung Unit
│   │   └── [unit]/page.tsx
│   ├── vocabulary/                   # Phan he Flashcard tu vung 3D
│   │   └── page.tsx
│   └── wordlist/                     # Bang tra cuu tu vung tong hop
│       └── page.tsx
├── components/                       # Cac thanh phan giao dien tai su dung
│   ├── AppShell.tsx                  # Khung giao dien responsive, header va layout
│   ├── Sidebar.tsx                   # Thanh dieu huong ben, ho tro phan trang va menu
│   ├── SpeakButton.tsx               # Component nut phat am van ban qua TTS
│   └── navigation.ts                 # Dinh nghia danh muc dieu huong
├── data/                             # Kho du lieu tinh cua he thong
│   ├── data.ts                       # Du lieu tong hop
│   ├── grammarData.ts                # Du lieu 12 chu diem ngu phap & bay de
│   ├── questionsData.ts              # 200 cau hoi trac nghiem va dap an
│   ├── readingData.ts                # Noi dung 09 bai doc hieu va cau hoi
│   ├── vocabularyData.ts             # 165 tu vung, IPA, vi du, collocation
│   └── databook/                     # Tai lieu goc (PDF, van ban bai tap tong hop)
├── hooks/                            # Custom React Hooks
│   ├── use-mobile.ts                 # Hook phat hien man hinh di dong
│   └── useSpeech.ts                  # Hook dieu khien Text-to-Speech API
├── lib/                              # Thu vien tien ich dung chung
│   └── utils.ts                      # Ham hop nhat Tailwind class (cn helper)
├── public/                           # Tai nguyen tinh (anh, file tai xuong, wordlists)
├── .env.example                      # File mau bien moi truong
├── package.json                      # Quan ly goi va kuan khao phien ban
├── postcss.config.mjs                # Cau hinh PostCSS cho Tailwind v4
└── tsconfig.json                     # Cau hinh TypeScript
```

---

## Yeu cau he thong va Cai dat

### Yeu cau tien quyet
- Node.js: Phien ban 18.18.0 hoac 20.x tro len.
- Trinh quan ly goi: `npm` (khuyen nghi), `yarn`, hoac `pnpm`.

### Cac buoc khoi chay

1. **Sao chep ma nguon ve may**:
   ```bash
   git clone <repository-url>
   cd EnglishB1
   ```

2. **Cai dat cac goi thu vien phu thuoc**:
   ```bash
   npm install
   ```

3. **Thiet lap bien moi truong**:
   Tao file `.env.local` dua tren file mau `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Dien gia tri `GEMINI_API_KEY` (neu co nhu cau su dung cac tinh nang tro ly AI):
   ```env
   GEMINI_API_KEY="your_actual_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```

4. **Khoi chay may chu o moi truong phat trien (Development)**:
   ```bash
   npm run dev
   ```
   Truy cap ung dung tai dia chi: `http://localhost:3000` tren trinh duyet.

5. **Kiem tra ma nguon (Linting)**:
   ```bash
   npm run lint
   ```

6. **Dong goi san pham (Production Build)**:
   ```bash
   npm run build
   npm run start
   ```

---

## Bien moi truong

| Ten bien | Bat buoc | Mac dinh | Mo ta |
|---|---|---|---|
| `GEMINI_API_KEY` | Khong | Trống | Khoa API cua Google Gemini danh cho cac tac vu AI nang cao. |
| `APP_URL` | Khong | `http://localhost:3000` | Dia chi URL goc cua ung dung phuc vu dinh tuyen va API callbacks. |

---

## Danh sach lenh thuc thi

- `npm run dev`: Chay development server voi Next.js o che do live-reload.
- `npm run build`: Bien dich va toi uu hoa ma nguon cho production.
- `npm run start`: Khoi dong server production sau khi da build thanh cong.
- `npm run lint`: Kiem tra toan bo quy chuan ma nguon bang ESLint.
- `npm run clean`: Xoa cache va thu muc `.next` de khoi tao lai tu dau.

---

## Huong dan phat trien tiep theo

- Tich hop he thong luu tru tien trinh hoc tap vao LocalStorage hoac co so du lieu (PostgreSQL / Supabase).
- Bo sung che do luyen noi (Speaking Practice) su dung Web Audio API va Gemini Multimodal Live API.
- Tich hop he thong thong ke, bieu do theo doi nang luc ca nhan sau moi lan lam bai thi thu.
