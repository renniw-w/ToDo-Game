package de.wawuschels.todo_game.domain;

import de.wawuschels.todo_game.domain.model.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
}
