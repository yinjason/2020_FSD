package userservice.service;

import java.util.List;

import userservice.entity.User;

public interface UserService {
	List<User> findAll();
}
