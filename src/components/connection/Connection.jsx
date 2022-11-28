import { createClient } from "@supabase/supabase-js";

export const supabase= createClient(
    "https://rmfrdzmfwzunocvzqmum.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZnJkem1md3p1bm9jdnpxbXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NDM1NDMsImV4cCI6MTk4NTIxOTU0M30.UNq-J2RMWJDrTfjoBn3bKY4WqTvm99AyiCkAJoU1k6o"
    )