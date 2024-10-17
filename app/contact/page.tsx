import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
export default function Contact() {
    return (
<div className="min-h-screen sm:p-16 sm:pt-8">
    <Header />
    <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
        <Footer />
    </footer>
</div>
    )
}