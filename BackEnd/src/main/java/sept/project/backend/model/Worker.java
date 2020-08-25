package sept.project.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

@Entity
public class Worker{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workerID;
    private String name;
    private String workerIdentifier;
    private String desc;
    private Date dateOfBirth;
    private Date created_At;
    private Date updated_At;

    public Worker(){

    }

    public Long getId(){
        return workerID;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getIdentifier(){
        return workerIdentifier;
    }

    public void setIdentifier(String identifier){
        this.workerIdentifier = identifier;
    }

    public String getDesc(){
        return desc;
    }

    public Date getDateOfBirth(){
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    public void setDesc(String desc){
        this.desc = desc;
    }

    public Date getCreateDate(){
        return created_At;
    }

    public void setCreateDate(Date created){
        this.created_At = created;
    }

    public Date getUpdatedDate(){
        return updated_At;
    }

    public void setUpdateDate(Date updated){
        this.updated_At = updated;
    }
}
