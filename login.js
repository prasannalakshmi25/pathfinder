import { supabase } from './supabase.js';

async function login() {

    const email = document.getElementById("prasannarayudu59@gmail.com").value;
    const password = document.getElementById("prasanna").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Login successful!");
    }
}