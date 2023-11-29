package de.wawuschels.todo_game.business;

import de.wawuschels.todo_game.domain.PlayerWorkItemRepository;
import de.wawuschels.todo_game.domain.model.PlayerWorkItem;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlayerWorkItemService {
    private final PlayerWorkItemRepository playerWorkItemRepository;

    public List<PlayerWorkItem> findAll(){
        return playerWorkItemRepository.findAll();
    }

    public PlayerWorkItem findById(Long id){
        return playerWorkItemRepository.getReferenceById(id);
    }
}
