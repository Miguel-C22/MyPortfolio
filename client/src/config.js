import OpenAI from 'openai';
import { createClient } from "@supabase/supabase-js";

export const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const privateKey = process.env.REACT_APP_SUPABASE_API_KEY;
const url = process.env.REACT_APP_SUPABASE_URL;
export const supabase = createClient(url, privateKey);