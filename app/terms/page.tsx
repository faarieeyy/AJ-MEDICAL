import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms of Service | AJ Medical Equipment Trading',
  description: 'Terms and Conditions of AJ Medical Equipment Trading Dubai, UAE.'
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      <Header theme="light" />
      <main className="flex-grow bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-[3rem] mt-6">
        <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-6">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Legal Information</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#06162d]">Terms & Conditions</h1>
          <p>
            Welcome to <strong>AJ Medical Equipment Trading</strong>. By accessing our website, requesting quotations, or engaging our repair and servicing solutions, you agree to the following terms and conditions.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Servicing & Warranty</h2>
          <p>
            All medical equipment repairs, endoscope restorations, ultrasound probe repairs, and component replacements performed by AJ Medical certified technicians include standard repair warranty coverage as detailed in your specific service quotation.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Quotations & Supply</h2>
          <p>
            Equipment quotations, availability dates, and turnaround estimates are provided based on diagnostic inspection and inventory status. We guarantee genuine OEM or certified compatible medical grade parts.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws and regulations of the Emirate of Dubai and the United Arab Emirates.
          </p>
        </div>
      </main>
      <Footer showNewsletter={false} />
    </div>
  );
}
