import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    { question: "How To Play", answer: "To play, follow these steps..." },
    { question: "How To Invite Friends", answer: "You can invite friends by..." },
    { question: "Can I sign up for Special Events", answer: "Yes, you can sign up for special events by..." },
    { question: "Does it work with Low Speed Internet", answer: "Yes, it can work with low-speed internet, but..." }
  ]

  return (
    <section id="Faq" className="select-none bg-blue-900 p-5">
      <h2 className="text-white text-center font-extrabold text-2xl">
        F<span className="text-purple-400">requently</span> A<span className="text-purple-400">sked</span> Q<span className="text-purple-400">uestions</span>
      </h2>
      <article className="mt-6">
        {faqItems.map((item, index) => (
          <div key={item.question} className="w-full font-bold border-2 border-purple-700 py-4 px-2 text-lg text-white flex flex-col">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <h2>{item.question}</h2>
              {activeIndex === index ? (
                <IoMdRemove className="transform transition-transform duration-200" />
              ) : (
                <IoMdAdd className="transform transition-transform duration-200" />
              )}
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
              {activeIndex === index && <p className="text-white font-extralight mt-2">{item.answer}</p>}
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}

export default Faq
