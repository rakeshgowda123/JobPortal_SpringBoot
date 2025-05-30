package com.algomaze.model;

import java.util.List;

import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPost {
	@Id
	private int postId;
    private String postProfile;
    private String postDesc;
    private int reqExperience;

    @Convert(converter = StringListConverter.class)
    private List<String> postTechStack;


}
