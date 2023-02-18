package fullstack.dev.java.rest.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import fullstack.dev.java.rest.model.Book;

@RestController
public class LibraryController {
	
	
	@GetMapping("/book")
	public ResponseEntity<Book> getBook(String name ,String author){
		
		return new ResponseEntity<Book>(new Book(),HttpStatus.OK);
	}

}
