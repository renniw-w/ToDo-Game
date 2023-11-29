package de.wawuschels.todo_game.business;

import de.wawuschels.todo_game.domain.WorkItemRepository;
import de.wawuschels.todo_game.domain.model.WorkItem;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class WorkItemService {
    private final WorkItemRepository workItemRepository;

    public List<WorkItem> findAll(){
        return workItemRepository.findAll();
    }
    public WorkItem findById(Long id){
        return workItemRepository.getReferenceById(id);
    }
}
