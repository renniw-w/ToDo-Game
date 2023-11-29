package de.wawuschels.todo_game.domain;

import de.wawuschels.todo_game.domain.model.WorkItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkItemRepository extends JpaRepository<WorkItem, Long> {
}
