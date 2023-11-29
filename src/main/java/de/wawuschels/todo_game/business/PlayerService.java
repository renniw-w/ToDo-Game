package de.wawuschels.todo_game.business;

import de.wawuschels.todo_game.domain.PlayerRepository;
import de.wawuschels.todo_game.domain.model.Player;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public List<Player> findAll() {
        return playerRepository.findAll();
    }

    public Player findById(Long id) {
        return playerRepository.getReferenceById(id);
    }
}
