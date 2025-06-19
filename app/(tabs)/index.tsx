import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Text, 
  Card, 
  Button, 
  useTheme,
  Avatar,
  Chip
} from 'react-native-paper';
import { CirclePlus as PlusCircle, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text variant="headlineSmall" style={{ color: theme.colors.onBackground }}>
              Welcome back!
            </Text>
            <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
              How's your furry friend today?
            </Text>
          </View>
          <Bell size={24} color={theme.colors.onBackground} />
        </View>

        {/* Pet Quick Info */}
        <Card style={[styles.petCard, { backgroundColor: theme.colors.primaryContainer }]}>
          <Card.Content style={styles.petCardContent}>
            <Avatar.Image 
              size={60} 
              source={{ uri: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200' }}
            />
            <View style={styles.petInfo}>
              <Text variant="titleMedium" style={{ color: theme.colors.onPrimaryContainer }}>
                Max
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onPrimaryContainer, opacity: 0.8 }}>
                Golden Retriever • 3 years old
              </Text>
              <View style={styles.statusChips}>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.tertiary }}
                  textStyle={{ color: theme.colors.onTertiary }}
                >
                  Healthy
                </Chip>
                <Chip 
                  compact 
                  style={{ backgroundColor: theme.colors.secondary, marginLeft: 8 }}
                  textStyle={{ color: theme.colors.onSecondary }}
                >
                  Active
                </Chip>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Quick Actions
          </Text>
          <View style={styles.quickActions}>
            <Card style={styles.actionCard}>
              <Card.Content style={styles.actionContent}>
                <PlusCircle size={32} color={theme.colors.primary} />
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, textAlign: 'center' }}>
                  Log Activity
                </Text>
              </Card.Content>
            </Card>

            <Card style={styles.actionCard}>
              <Card.Content style={styles.actionContent}>
                <PlusCircle size={32} color={theme.colors.secondary} />
                <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, textAlign: 'center' }}>
                  Add Reminder
                </Text>
              </Card.Content>
            </Card>
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.section}>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>
            Recent Activities
          </Text>
          <Card style={styles.activityCard}>
            <Card.Content>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                Fed Max • 2 hours ago
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                1 cup of kibble + treats
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.activityCard}>
            <Card.Content>
              <Text variant="bodyMedium" style={{ color: theme.colors.onSurface }}>
                Walk completed • 4 hours ago
              </Text>
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                30 minutes in the park
              </Text>
            </Card.Content>
          </Card>
        </View>

        {/* Call to Action */}
        <View style={styles.section}>
          <Button 
            mode="contained" 
            onPress={() => {}}
            style={styles.ctaButton}
            contentStyle={styles.ctaButtonContent}
          >
            Track New Activity
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  petCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    elevation: 2,
    borderRadius: 16,
  },
  petCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  petInfo: {
    marginLeft: 16,
    flex: 1,
  },
  statusChips: {
    flexDirection: 'row',
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 20,
    marginBottom: 12,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  actionCard: {
    flex: 1,
    elevation: 1,
    borderRadius: 12,
  },
  actionContent: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  activityCard: {
    marginHorizontal: 20,
    marginBottom: 8,
    elevation: 1,
    borderRadius: 12,
  },
  ctaButton: {
    marginHorizontal: 20,
    borderRadius: 12,
  },
  ctaButtonContent: {
    paddingVertical: 8,
  },
});