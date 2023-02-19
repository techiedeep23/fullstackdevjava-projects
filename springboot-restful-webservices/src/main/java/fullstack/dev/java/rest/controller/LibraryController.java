package fullstack.dev.java.rest.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import fullstack.dev.java.rest.model.Book;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class LibraryController {

	@GetMapping(path="/book",produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<?> getBook(String language, String author) {
		
		try {
			File dataFile = (new ClassPathResource("db.json")).getFile();

			ObjectMapper mapper = new ObjectMapper();

			List<Book> bookList = mapper.readValue(dataFile, new TypeReference<List<Book>>() {
			});

			for (Book book : bookList) {

				if (Optional.ofNullable(language).isPresent() && !Optional.ofNullable(author).isPresent()
						&& language.equalsIgnoreCase(book.getLanguage())) {

					return new ResponseEntity<Book>(book, HttpStatus.OK);

				} else if (!Optional.ofNullable(language).isPresent() && Optional.ofNullable(author).isPresent()
						&& author.equalsIgnoreCase(book.getAuthor())) {

					return new ResponseEntity<Book>(book, HttpStatus.OK);

				} else if (Optional.ofNullable(language).isPresent() && Optional.ofNullable(author).isPresent()
						&& language.equalsIgnoreCase(book.getLanguage()) && author.equalsIgnoreCase(book.getAuthor())) {

					return new ResponseEntity<Book>(book, HttpStatus.OK);

				}
			}
		} catch (IOException e) {

			log.error("Failed to get the book ::: " + e.getMessage());

			return new ResponseEntity<Book>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<Book>(HttpStatus.NO_CONTENT);
	}

}
