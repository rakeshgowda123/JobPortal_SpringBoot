package com.algomaze.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.algomaze.model.JobPost;
import com.algomaze.repo.JobRepo;

@Service
public class JobService {
	
	@Autowired
	private JobRepo repo;
	
	
	public List<JobPost> getalljobs() {
		return repo.findAll();
	}
	
	
	public JobPost getJob(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(new JobPost(id, null, null, 0, null));
	}
	
	public List<JobPost> search(String keyword) {
		// TODO Auto-generated method stub
		return repo.findBypostProfileContainingOrPostDescContaining(keyword,keyword);
	}
	
	public void deletepost(int id) {
		repo.deleteById(id);	
	}
	
	public void addjob(JobPost jobPost) {
	    if (jobPost.getPostId() == 0 ||
	        jobPost.getPostProfile() == null || jobPost.getPostProfile().isBlank() ||
	        jobPost.getPostDesc() == null || jobPost.getPostDesc().isBlank() ||
	        jobPost.getPostTechStack() == null || jobPost.getPostTechStack().isEmpty()) {

	        System.out.println("🚫 Invalid JobPost - not saving: " + jobPost);
	        return;
	    }

	    System.out.println("✅ Saving JobPost: " + jobPost);
	    repo.save(jobPost);
	}

	
	public void editJob(JobPost jobPost) {
		// TODO Auto-generated method stub
		repo.save(jobPost);
	}






//		public void load() {
//	    List<JobPost> jobs = new ArrayList<>(Arrays.asList(
//	        new JobPost(101, "Software Engineer", "Develop and maintain web applications", 2,
//	            Arrays.asList("Java", "Spring Boot", "React")),
//	        new JobPost(102, "Data Analyst", "Analyze datasets and build dashboards", 1,
//	            Arrays.asList("Python", "SQL", "Power BI")),
//	        new JobPost(103, "Frontend Developer", "Build responsive UIs", 3,
//	            Arrays.asList("HTML", "CSS", "JavaScript", "React"))
//	    ));
//
//	    repo.saveAll(jobs);
//	}

}
