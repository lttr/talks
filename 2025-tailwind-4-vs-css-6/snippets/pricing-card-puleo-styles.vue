<style scoped>
.title {
  --flow-space: var(--space-2);
  line-height: var(--font-lineheight-4);
}

.pricing {
  --flow-space: var(--space-1);
}

.amount {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-5);
  letter-spacing: -0.025em;
  color: var(--text-color-1);
}

.description {
  margin-top: var(--space-3);
  line-height: var(--font-lineheight-4);
}

.features {
  margin-top: var(--space-5);
  --stack-space: var(--space-2);
  font-size: var(--font-size--1);
  line-height: var(--font-lineheight-3);
}

.feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.icon {
  font-size: var(--font-size-1);
  color: var(--blue-8);
}

.p-button {
  margin-top: var(--space-6);
  display: block;
  background-color: var(--blue-8);
  color: var(--text-color-1-inverse);

  &:hover {
    background-color: var(--blue-7);
  }
}

.card {
  padding: var(--space-6);
  border-radius: var(--radius-4);
  box-shadow: var(--shadow-card);
  border: var(--border-default);
  color: var(--text-color-2);
  background-color: var(--surface-1);
}

</styles>
