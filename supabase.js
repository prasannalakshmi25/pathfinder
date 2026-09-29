import { createClient } from
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://bzakldmwvjtbevnxxgdq.supabase.co';
const supabaseKey = 'sb_publishable_XRlx4DOH5y73ssUScIYBew_DR6JAqc-';

const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

export { supabase };