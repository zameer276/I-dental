import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, Calendar, CheckCircle, HelpCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { Appointment } from '../types';

interface ContactSectionProps {
  currentLanguage: 'en' | 'hi';
  preSelectedService?: string;
  onBookingSuccess: () => void;
}

export default function ContactSection({ 
  currentLanguage, 
  preSelectedService = "", 
  onBookingSuccess 
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: preSelectedService || SERVICES[0].title,
    date: "",
    time: "",
    notes: ""
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [lastAppointment, setLastAppointment] = useState<Appointment | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API registration & write into local storage
    const newAppointment: Appointment = {
      id: "APT-" + Math.floor(Math.random() * 900000 + 100000),
      patientName: formData.name,
      phone: formData.phone,
      email: formData.email,
      treatment: formData.treatment,
      preferredDate: formData.date,
      preferredTime: formData.time,
      notes: formData.notes,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    // Save under existing database array in localStorage
    const saved = localStorage.getItem('i_smile_appointments');
    const list = saved ? JSON.parse(saved) : [];
    list.push(newAppointment);
    localStorage.setItem('i_smile_appointments', JSON.stringify(list));

    // Update triggers
    setLastAppointment(newAppointment);
    setFormSuccess(true);
    onBookingSuccess();

    // Reset fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      treatment: preSelectedService || SERVICES[0].title,
      date: "",
      time: "",
      notes: ""
    });
  };

  // Prepares the direct WhatsApp template message
  const triggerWhatsAppRedirect = () => {
    if (!lastAppointment) return;
    
    const textMsg = `Hello i Smile Dental Care! I would like to book a dental appointment.

📋 DETAILS:
• ID: ${lastAppointment.id}
• Patient Name: ${lastAppointment.patientName}
• Phone: ${lastAppointment.phone}
• Requested Treatment: ${lastAppointment.treatment}
• Preferred Date: ${lastAppointment.preferredDate}
• Preferred Time: ${lastAppointment.preferredTime}
${lastAppointment.notes ? `• Additional Notes: ${lastAppointment.notes}` : ""}

Please confirm my appointment slot. Thank you!`;

    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/919031840505?text=${encoded}`, '_blank');
  };

  const text = {
    title: currentLanguage === 'en' ? "Schedule Your Appointment" : "मुस्कान की शुरुआत करें",
    subtitle: currentLanguage === 'en'
      ? "Fill out our digital request desk or reach out immediately via direct Call / WhatsApp support."
      : "डिजिटल फॉर्म भरें अथवा नीचे दिए गए बटन पर क्लिक कर सीधे हमसे संपर्क करें।",
    addressLabel: currentLanguage === 'en' ? "Our Lalpur Location" : "क्लिनिक का पता",
    hoursLabel: currentLanguage === 'en' ? "Clinic Operating Hours" : "खुले रहने का समय",
    phoneLabel: currentLanguage === 'en' ? "Phone & Appointments" : "कॉल करें",
    whatsappLabel: currentLanguage === 'en' ? "WhatsApp Booking" : "व्हाट्सएप चैट",
    
    // Form fields
    namePlaceholder: currentLanguage === 'en' ? "Your Full Name" : "मरीज का पूरा नाम",
    phonePlaceholder: currentLanguage === 'en' ? "Your Phone Number (10 digit)" : "मोबाइल नंबर",
    emailPlaceholder: currentLanguage === 'en' ? "Email Address (Optional)" : "ईमेल आईडी (वैकल्पिक)",
    selectTreatment: currentLanguage === 'en' ? "Select Dental Service" : "उचित सेवा का चयन करें",
    selectDate: currentLanguage === 'en' ? "Preferred Date" : "पसंदीदा तारीख",
    selectTime: currentLanguage === 'en' ? "Preferred Time Slot" : "पसंदीदा समय",
    notesPlaceholder: currentLanguage === 'en' ? "Any dental history or medical notes?" : "अपनी परेशानी संक्षेप में लिखें (वैकल्पिक)",
    submitBtn: currentLanguage === 'en' ? "Submit Booking Request" : "अपॉइंटमेंट स्लॉट बुक करें",
    
    // Success messages
    successHeading: currentLanguage === 'en' ? "Booking Request Sent!" : "बुक करने का अनुरोध भेजा गया!",
    successCongrats: currentLanguage === 'en' 
      ? "Your slot is saved locally inside our system! Share a direct backup on WhatsApp to finalize instantly with our frontdesk."
      : "आपकी जानकारी सुरक्षित कर ली गयी है! तुरंत बुकिंग पक्की करने के लिए विवरण को व्हाट्सएप पर साझा करें।",
    waButtonText: currentLanguage === 'en' ? "Send Backup to WhatsApp" : "व्हाट्सएप पर विवरण साझा करें",
    newBooking: currentLanguage === 'en' ? "Book Another Appointment" : "दूसरा अपॉइंटमेंट बुक करें"
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            {text.title}
          </h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base">
            {text.subtitle}
          </p>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct info, operating hours, active map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct contact Info Blocks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="text-teal-600 p-2 bg-teal-5 rounded-xl shrink-0 h-max">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-gray-900 text-base">{text.addressLabel}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">{CLINIC_INFO.address}</p>
                </div>
              </div>

              {/* Call Hotline */}
              <div className="flex gap-4">
                <div className="text-teal-600 p-2 bg-teal-5 rounded-xl shrink-0 h-max">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-gray-900 text-base">{text.phoneLabel}</h4>
                  <p className="text-xs sm:text-sm text-teal-700 font-bold mt-0.5">{CLINIC_INFO.phone}</p>
                </div>
              </div>

              {/* Clinic hours */}
              <div className="flex gap-4">
                <div className="text-teal-600 p-2 bg-teal-5 rounded-xl shrink-0 h-max">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-extrabold text-gray-900 text-base">{text.hoursLabel}</h4>
                  <div className="mt-2 space-y-1">
                    {CLINIC_INFO.hours.map((hour, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs sm:text-sm text-gray-600">
                        <span className="font-semibold">{hour.days}</span>
                        <span>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant Redirect Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a 
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-4 py-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition hover:bg-teal-100/50"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                
                <button
                  onClick={() => {
                    const textMessage = encodeURIComponent("Hello i Smile Dental Care, I would like to book a dental appointment.");
                    window.open(`https://wa.me/919031840505?text=${textMessage}`, '_blank');
                  }}
                  className="px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs text-center flex items-center justify-center gap-1.5 transition hover:bg-emerald-100/50"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-100" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 aspect-video lg:flex-1 min-h-[220px]">
              <iframe
                title="i Smile Dental Care Google Maps"
                src={CLINIC_INFO.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Appointment Form / Success Desk */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 flex flex-col justify-between">
            
            {!formSuccess ? (
              <form onSubmit={handleFormSubmission} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.namePlaceholder} <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.phonePlaceholder} <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="tel"
                      pattern="^[0-9]{10}$"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Email field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.emailPlaceholder}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    />
                  </div>

                  {/* Services dropdown */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.selectTreatment}</label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Date selection */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.selectDate} <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]} // cannot book history dates
                      value={formData.date}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    />
                  </div>

                  {/* Time field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-700 mb-1.5">{text.selectTime} <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition"
                    />
                  </div>

                </div>

                {/* Patient notes */}
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-gray-700 mb-1.5">{text.notesPlaceholder}</label>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="e.g. Broken tooth, sudden wisdom pain, scale whitening requested..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-sm outline-none transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md shadow-teal-100 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{text.submitBtn}</span>
                </button>

              </form>
            ) : (
              /* Booking Success visual result */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-gray-900">{text.successHeading}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-md">{text.successCongrats}</p>
                </div>

                {/* Simple Ticket Card summarizing detail */}
                <div className="w-full max-w-sm bg-teal-50/50 rounded-2xl p-5 border border-teal-100 text-left space-y-3 shadow-xs font-mono text-xs text-gray-700">
                  <div className="flex justify-between border-b border-teal-100/50 pb-2">
                    <span className="font-bold text-teal-800">APPOINTMENT TICKET</span>
                    <span className="font-bold text-gray-900">{lastAppointment?.id}</span>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Patient:</span>
                      <span className="font-bold text-gray-900">{lastAppointment?.patientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service:</span>
                      <span className="font-bold text-gray-900">{lastAppointment?.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-bold text-gray-900">{lastAppointment?.preferredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Slot:</span>
                      <span className="font-bold text-gray-900">{lastAppointment?.preferredTime}</span>
                    </div>
                  </div>
                </div>

                {/* Submitting copy to WhatsApp to finalize slot absolute flow */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <button
                    onClick={triggerWhatsAppRedirect}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-50 transition cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white/10" />
                    <span>{text.waButtonText}</span>
                  </button>

                  <button
                    onClick={() => setFormSuccess(false)}
                    className="py-3 px-4 rounded-xl border border-teal-200 text-teal-700 font-bold text-xs hover:bg-teal-50 transition"
                  >
                    {text.newBooking}
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
