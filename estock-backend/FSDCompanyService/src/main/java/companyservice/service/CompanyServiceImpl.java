package companyservice.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import companyservice.dao.CompanyDao;
import companyservice.entity.Company;

@Service
public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	private CompanyDao companyDao;

	@Autowired
	private StockUtilService stockUtilService;
	
	@Override
	public List<Company> findAll() {
		
		List<Company> origList = this.companyDao.findAll();
		origList = origList.stream().map(comp->{
			String desc = getStockMarcketDescriptionById(comp.getStockMarket());
			comp.setStockMarket(desc);
			return comp;
		}).collect(Collectors.toList());
		return origList;//return origList.stream().map(comp->{ return comp}).collect(Collectors.toList());
	}

	private String getStockMarcketDescriptionById(String id) {
		return stockUtilService.getStockName(id);
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
