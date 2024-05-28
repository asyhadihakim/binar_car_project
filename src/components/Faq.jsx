import { faqList } from "../utils/dummy";
const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-left">
          <h2>Frequently Asked Question</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="faq-right">
          {faqList.map((data) => (
            <div className="faq-right-items">
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
