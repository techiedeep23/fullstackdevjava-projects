package fullstack.dev.java.features.basic;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {

		Animal animal = new Animal();

		animal.type(true);

		// Overriding or dynamic method disptach where method is called based on the
		// actual object
		animal = new Mammal();

		animal.type(true);

		//Mammal object created using overloaded constructor
		Mammal mammal = new Mammal(Arrays.asList("Warm Blooded", "Hair and Fur"), true);

		System.out.println(mammal.getProduceMilk());
		System.out.println(mammal.getCharacteristics());

	}

}
