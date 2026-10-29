-- Chạy trong SQL Editor của Supabase
create table if not exists public.tributes (
 id bigint generated always as identity primary key,
 author text not null check (char_length(author) between 1 and 60),
 message text not null check (char_length(message) between 10 and 500),
 status text not null default 'pending' check (status in ('pending','approved','rejected')),
 created_at timestamptz not null default now()
);
alter table public.tributes enable row level security;
create policy "Anyone can read approved tributes" on public.tributes for select to anon using (status='approved');
create policy "Anyone can submit pending tributes" on public.tributes for insert to anon with check (status='pending');
-- Duyệt trong Table Editor: chuyển status từ pending thành approved.
-- Khuyến nghị bật CAPTCHA / rate limiting qua backend trước khi mở rộng công khai.

-- Chạy bổ sung khi đã có bảng tributes từ phiên bản trước:
alter table public.tributes add column if not exists occasion text not null default '20-11';
