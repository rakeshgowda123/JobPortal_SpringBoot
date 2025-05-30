package com.algomaze;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.algomaze.model.JobPost;
import com.algomaze.service.JobService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(originPatterns = "http://localhost:3000")
public class JobController {
	
	@Autowired
 private JobService service ;
 
 @GetMapping("jobPosts")
 public List<JobPost> getalljobpost(){
	return service.getalljobs();
 }
 
 @GetMapping("jobPost/{id}")
 public JobPost getJobpost(@PathVariable int id) {
    return service.getJob(id);
 }

 
 @PostMapping("jobPost")
	public void addJob(@RequestBody JobPost jobPost) {
		service.addjob(jobPost);
	}
 
 
 @DeleteMapping("jobPost/{jobPostid}")
 public String deletepost(@PathVariable int jobPostid) {
	service.deletepost(jobPostid);
	return "deleted";
 }
 
 
	
 
 @PutMapping("jobPost")
	public JobPost editJob(@RequestBody JobPost jobPost) {
	 service.editJob(jobPost);
	 return service.getJob(jobPost.getPostId());
		
	}

 
 
 
 @GetMapping("jobPosts/keyword/{keyword}")
	public List<JobPost> searchbyKeyword(@PathVariable("keyword") String keyword){
	  
		return service.search(keyword);
		}
 
// @GetMapping("load")
//	public String loadData() {
//		service.load();
//		return "Success";
//	}

}
