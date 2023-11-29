package de.wawuschels.todo_game.domain;

import de.wawuschels.todo_game.domain.model.PlayerWorkItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerWorkItemRepository extends JpaRepository<PlayerWorkItem, Long> {
}
