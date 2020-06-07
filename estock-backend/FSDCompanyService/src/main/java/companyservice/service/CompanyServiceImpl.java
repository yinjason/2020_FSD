package companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import companyservice.dao.CompanyDao;
import companyservice.entity.Company;

@Service
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	private CompanyDao companyDao;

	@Override
	public List<Company> findAll() {
		return this.companyDao.findAll();
	}

	@Override
	public void createCompany(Company company) {
		this.companyDao.save(company);
	}

	@Override
	public Company findById(long id) {
		return this.companyDao.findById(id).orElse(null);
	}
	

}
