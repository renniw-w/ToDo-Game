package de.wawuschels.todo_game.controller;

import de.wawuschels.todo_game.business.WorkItemService;
import de.wawuschels.todo_game.domain.model.WorkItem;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class WorkItemController {
    private final WorkItemService workItemService;

    @GetMapping("/api/workItem")
    public List<WorkItem> findAll(){
        return workItemService.findAll();
    }
    @GetMapping("/api/workItem/{id}")
    public WorkItem find(@PathVariable Long id){
        return workItemService.findById(id);
    }
}
