package companyservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import companyservice.entity.Company;
import companyservice.service.CompanyService;

@RestController
@RequestMapping("/company")
public class CompanyServiceController {
	
	@Autowired
	private CompanyService companyService;
	
	@RequestMapping("/list")
	public List<Company> queryAllCompanies() {
		return this.companyService.findAll();
	}
	
	@PostMapping("/create")
	public void createCompany(@RequestBody Company company) {
		this.companyService.createCompany(company);
	}
	
	@RequestMapping("/{id}")
	public Company queryCompanyById(@PathVariable long id) {
		return this.companyService.findById(id);
	}

}
