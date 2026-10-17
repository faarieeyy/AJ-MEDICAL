import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy | AJ Medical Equipment Trading',
  description: 'Privacy Policy of AJ Medical Equipment Trading Dubai, UAE.'
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      <Header theme="dark" />
      <main className="flex-grow bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-[3rem] mt-6">
        <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-6">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Legal Information</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#06162d]">Privacy Policy</h1>
          <p>
            At <strong>AJ Medical Equipment Trading</strong>, we prioritize the confidentiality and protection of our clients&apos; information. This Privacy Policy outlines how we collect, store, and utilize details provided through our website and service channels.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Information Collection</h2>
          <p>
            We only collect information necessary to facilitate medical equipment inquiries, repair assessments, quotation requests, and customer support. This includes contact person names, healthcare facility names, email addresses, and phone numbers.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Equipment & Clinical Data Protection</h2>
          <p>
            All technical schematics, serial numbers, facility locations, and device maintenance logs entrusted to AJ Medical Equipment Trading are held with strict adherence to industry confidentiality protocols.
          </p>
          <h2 className="text-xl font-bold text-[#06162d] pt-4">Contact Information</h2>
          <p>
            For privacy inquiries, please contact: <a href="mailto:info@ajmedicaltrading.com" className="text-sky-600 font-semibold hover:underline">info@ajmedicaltrading.com</a> or visit Al Quoz Industrial Area 3, Dubai, United Arab Emirates.
          </p>
        </div>
      </main>
      <Footer showNewsletter={false} />
    </div>
  );
}
