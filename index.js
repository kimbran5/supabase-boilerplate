import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://eslchzhqritmhzzcgkmh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbGNoemhxcml0bWh6emNna21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTU3NzEsImV4cCI6MTk5MzczMTc3MX0.R_xZRAZ2-_j1PFu51cKmBfvW77F22PeMLZQ_Niktgl0'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}

getBooks();
