import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import BooksDetails from "./BooksDetails";
const Books = [
  {
    title: "If Tomorrow Comes",
    author: "Sidney Sheldon",
    description:
      "It is a story portraying an ordinary woman who is framed by the Mafia, her subsequent quest for vengeance towards them and her later life as a con artist.",
    category_id: 1,
    image: "https://m.media-amazon.com/images/I/71Ldkc5R4GS.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    description:
      "The constant theme in The Alchemist is to pursue your dreams by following what your heart desires. During the young boy's journey, he learns to listen to the heart and to follow the language of omens. With each passing obstacle and hurdle that the young boy encounters, there is a lesson to learn.",
    category_id: 2,
    image:
      "https://www.jfdperfsolutions.com/wp-content/uploads/2019/01/0_oGUMQVMVxjXCcS1B.jpg",
  },
  {
    title: "We Need More Wine",
    author: "Gabrielle Union",
    description:
      "Union tackles a range of experiences, including bullying, beauty standards, and competition between women in Hollywood, growing up in white California suburbia and then spending summers with her black relatives in Nebraska, coping with crushes, puberty, and the divorce of her parents.",
    category_id: 3,
    image:
      "https://lh3.googleusercontent.com/Ii07ohCJSn7PMdXritpTX2HuJzZIyMOGQ2flNN0SI69TQGiUm3i-3IVLii-q3S4u7n_lxFMr-74mwp-tyJIpdfDSC_p6PTEry_kRF58f=s750",
  },
  {
    title: "Half Of A Yellow Sun",
    author: "Chimamanda Ngozi",
    description:
      "Epic, ambitious, and triumphantly realized, Half of a Yellow Sun is a remarkable novel about moral responsibility, the end of colonialism, ethnic allegiances, class and race–and the ways in which love can complicate them all.",
    category_id: 4,
    image:
      "https://www.chimamanda.com/wp-content/uploads/2021/09/Half-of-a-Yellow-Sun-fx.jpg",
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    description:
      "Things Fall Apart (1958},, Achebe's first novel, concerns traditional Igbo life at the time of the advent of missionaries and colonial government in his homeland. His principal character cannot accept the new order, even though the old has already collapsed.",
    category_id: 5,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1352082529l/37781.jpg",
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon the first was his 2000 novel Angels & Demons. The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
    category_id: 8,
    image: "https://covers.openlibrary.org/w/id/9255229-M.jpg",
  },
  {
    title: "The Eyes OF Darkness",
    author: "Dean Koontz",
    description:
      "Tina Evans, grieving over the death of her little boy in a tragic accident, and her compassionate lover embark on a terrifying odyssey in search of the truth about her son's death and the shocking messages that lead her to believe that the child may not be dead after all.",
    category_id: 8,
    image: "https://covers.openlibrary.org/w/id/12547107-M.jpg",
  },
  {
    title: "The Bachelor's Bargain",
    author: "Jessica Steele",
    description:
      "What would Merren have done without Jarad Montgomery? Having sold her late mother's ring to help her brother she had then been robbed and it was Jarad who'd dusted her down and offered to replace the money.",
    category_id: 6,
    image: "https://covers.openlibrary.org/w/id/2406834-M.jpg",
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    description:
      "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life seems too good to be true.",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/10473609-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "Bloodline",
    author: "Sidney Sheldon",
    description:
      "Elizabeth Rolfe, only child of one of the world's richest men, has everything. When her father dies, she discovers that her inheritance includes far more than his international pharmaceutical company.",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/6943294-L.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    description:
      "Argues that a good education and a secure job are not guarantees for financial success, and describes six guidelines for making money work for oneself.",
    category_id: 7,
    image: "https://covers.openlibrary.org/b/id/12882777-L.jpg",
  },
  {
    title: "Twisted lOVE",
    author: "Ana Huang",
    description:
      "He has a heart of ice … but for her, he'd burn the world. Alex Volkov is a devil blessed with the face of an angel and cursed with a past he can't escape. Driven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart. ",
    category_id: 6,
    image: "https://covers.openlibrary.org/b/id/12940490-L.jpg",
  },
  {
    title: "",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
  {
    title: "The Subtle Art Of Not Giving A Fuck",
    author: "Mark Manson",
    description: "A Counterintuitive Approach to Living a Good Life",
    category_id: 2,
    image: "https://covers.openlibrary.org/b/id/8231990-M.jpg",
  },
];

const BooksContainer = ({ books = Books }) => {
  const [allBooks, setBooks] = React.useState([]);
  console.log(allBooks);

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {   
    fetch("http://localhost:9292/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  };

  const listOfBookCards = allBooks.map(
    ({ id, title, author, description, image, category_id }) => {
      return (
        <NavLink to ={`/books/${id}`} key={id} className="mt-3 col-md-3">
          <Card>
            <Card.Img src={image} />
            <Card.Body>
              <Card.Title>
                By: <span>{author}</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </NavLink>
      );
    }
  );

  return <div className="row">{listOfBookCards}</div>;
};

export default BooksContainer;
