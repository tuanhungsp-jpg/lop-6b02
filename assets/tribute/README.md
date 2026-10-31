# Tribute page artwork and wishes

The six floral envelopes are generated stationery artwork, arranged in a3x2 contact sheet and displayed with CSS backgrounds. The garden backdrop is the same generated artwork used by the diary. Sample wishes use generic authors and are marked as demos. The teacher panel uses a floral name card; it does not invent a portrait of the teacher.

With the current empty `SITE_CONFIG` Supabase values, the form previews and stores device-local drafts only. It does not notify teachers or publish those drafts. Connecting the existing Supabase `tributes` table enables pending submissions and reads only approved wishes. The recipient is encoded as `Kính gửi <recipient>,\n\n` at the beginning of the existing `message` column, respecting its500-character constraint; no schema migration is needed. Frontend config must use only the project's public anon/publishable key, never a service-role or secret key.

Demo copies are independent of pupils' real submissions. Public submission success is shown only after a successful server response. Failed sends retain the form and attempt to save a device-local draft. Publication still requires approval by the database owner according to `supabase.sql`.
