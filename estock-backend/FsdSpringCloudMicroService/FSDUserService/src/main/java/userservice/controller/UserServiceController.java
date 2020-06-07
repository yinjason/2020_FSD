package userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import userservice.entity.User;
import userservice.service.UserService;

@RestController
@RequestMapping("/user")
public class UserServiceController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/list")
	public List<User> queryAllUsers() {
		return this.userService.findAll();
	}

}
