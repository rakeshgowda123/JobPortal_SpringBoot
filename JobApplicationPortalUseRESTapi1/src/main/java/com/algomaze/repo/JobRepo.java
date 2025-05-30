package com.algomaze.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algomaze.model.JobPost;

@Repository
public interface JobRepo extends JpaRepository<JobPost , Integer>  {

	List<JobPost> findBypostProfileContainingOrPostDescContaining(String postProfile,String postDesc);

}
