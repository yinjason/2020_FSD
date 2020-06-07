package companyservice.service;

import java.util.List;

import companyservice.entity.Company;

public interface CompanyService {
	List<Company> findAll();
	void createCompany(Company company);
	Company findById(long id);
}
