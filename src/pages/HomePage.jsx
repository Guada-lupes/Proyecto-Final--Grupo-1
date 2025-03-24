import { ProductsComponent } from "../components/ProductsComponent";
import {SearchComponent} from "../components/SearchComponent"
// import { DetailsProductComponent } from "../components/DetailsProductComponent";
import { useParams, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import Pagination from "../components/Pagination";

import "../styles/HomePageStyle.css";

export const HomePage = () => {
  const { id } = useParams();
  const { books, searchWord } = useContext(BooksContext);

  //constante que filtra por palabra en cado de que haya búsqueda
  const filteredBooks = searchWord ? books.filter(book=> book.titulo.toLowerCase().includes(searchWord.toLowerCase())) : books;

  // Estado para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  // Índices de los libros a mostrar en la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div className="home-page">
      <SearchComponent/>
      <h1 className="home-page__title">Tu comunidad literaria</h1>
      <div className="home-page__content">
        {id ? (
          <Outlet />
        ) : (
          <>
            <ProductsComponent books={currentBooks} />
            <Pagination
              totalBooks={books.length}
              booksPerPage={booksPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
