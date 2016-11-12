package org.usd232.hackathon.twentysixteen;

import static spark.Spark.*;

public class Main {
	public static void main(String[] args) {
		get("/hello", (req, res) -> "Hello World");
	}
}
