package fullstack.dev.java.rest.model;

public class Book {
	
	private String id;
	private String language;
	private String edition;
	private String author;
	

	public String getId() {
		return id;
	}

	public String getLanguage() {
		return language;
	}

	public String getEdition() {
		return edition;
	}

	public String getAuthor() {
		return author;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	
	

}
