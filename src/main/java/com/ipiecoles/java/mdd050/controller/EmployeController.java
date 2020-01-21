package com.ipiecoles.java.mdd050.controller;

import com.ipiecoles.java.mdd050.repository.EmployeRepository;
import  org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/employes")
public class EmployeController {

    @Autowired
    private EmployeRepository employeRepository;

    @RequestMapping("/count")
    public Long countEmployes(){
        //Recupère le nombre d'employés
        return employeRepository.count();
    }
}
