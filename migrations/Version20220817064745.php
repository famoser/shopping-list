<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220817064745 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE embed (id CHAR(36) NOT NULL --(DC2Type:guid)
        , content CLOB NOT NULL, type INTEGER NOT NULL, created_at DATETIME NOT NULL, last_changed_at DATETIME NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE product (id CHAR(36) NOT NULL --(DC2Type:guid)
        , name CLOB NOT NULL, category INTEGER NOT NULL, active BOOLEAN NOT NULL, created_at DATETIME NOT NULL, last_changed_at DATETIME NOT NULL, PRIMARY KEY(id))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE embed');
        $this->addSql('DROP TABLE product');
    }
}
