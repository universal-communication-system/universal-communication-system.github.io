package org.usd232.hackathon.twentysixteen.authentication;

public class UserInfo {
	private final int id;
	private final String firstname;
	private final String lastname;

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public int getId() {
		return id;
	}

	public UserInfo(int id, String firstname, String lastname) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
