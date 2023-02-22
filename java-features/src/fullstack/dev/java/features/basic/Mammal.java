package fullstack.dev.java.features.basic;

import java.util.List;

public class Mammal extends Animal {

	private List<String> characteristics;
	private Boolean produceMilk;
	private String color;
	
	//OverLoading example through constructors
	public Mammal(List<String> characteristics, Boolean produceMilk) {
		super();
		this.characteristics = characteristics;
		this.produceMilk = produceMilk;
	}

	public Mammal(List<String> characteristics, Boolean produceMilk, String color) {
		super();
		this.characteristics = characteristics;
		this.produceMilk = produceMilk;
		this.color = color;
	}

	public Mammal() {

	}

	public List<String> getCharacteristics() {
		return characteristics;
	}

	public Boolean getProduceMilk() {
		return produceMilk;
	}

	public String getColor() {
		return color;
	}
	
	public void type(Boolean hasBackbone) {

		if (hasBackbone)
			System.out.println("Mammals are vertebrates");
		else
			System.out.println("Not a mammal");
	}

}
