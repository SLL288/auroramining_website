import { Send } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Inquiry staged. Connect this form to email or your CRM when ready.");
    event.currentTarget.reset();
  };

  return (
    <form className="grid grid-cols-1 gap-5 border border-aurora-gold/35 bg-white/82 p-5 shadow-panel backdrop-blur sm:grid-cols-2 sm:p-7" onSubmit={handleSubmit}>
      <label className="form-field">
        Name
        <input name="name" autoComplete="name" required />
      </label>
      <label className="form-field">
        Company
        <input name="company" autoComplete="organization" />
      </label>
      <label className="form-field">
        Email
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="form-field">
        Service Need
        <select name="service">
          <option>Mining services</option>
          <option>Exploration support</option>
          <option>Geomatics, GIS, and mapping</option>
          <option>Remote project coordination</option>
          <option>Camp and logistics planning</option>
          <option>JV or pilot project support</option>
        </select>
      </label>
      <label className="form-field sm:col-span-2">
        Project Details
        <textarea
          name="details"
          rows="5"
          placeholder="Location, project stage, timing, field requirements, and preferred follow-up"
        />
      </label>
      <button className="btn-primary sm:col-span-2" type="submit">
        <Send size={18} />
        Send Inquiry
      </button>
      <p className="min-h-6 text-sm font-semibold text-aurora-blue sm:col-span-2" role="status">
        {status}
      </p>
    </form>
  );
}

export default ContactForm;
