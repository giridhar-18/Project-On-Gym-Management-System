package com.app.service;

import com.app.dto.LoginRequest;
import com.app.pojos.Login;

@SuppressWarnings("unused")
public interface ILoginService {
	Login authenticateCustomer(String email,String pwd);
}
