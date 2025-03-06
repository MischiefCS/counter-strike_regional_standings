### Roster Details<br />
Team Name: Bad News Capybaras<br />
Roster: cbass, Gabe, Grave, jchancE, LaffyTs<br />
Global Rank: [166](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [46]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  613.7<br />
<br />
Final Rank Value (613.7) = Starting Rank Value (636.8) + Head To Head Adjustments (-23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.205[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.8
- 400 + ( ( 0.115 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 636.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      394 | 2025-02-09 | MCS Gaming           | L   | 0.819      | -            | -                | -                | -         |   -13.82 | cbass, Gabe, Grave, jchancE, LaffyTs |
|           12 |      442 | 2025-02-08 | M80                  | L   | 0.812      | -            | -                | -                | -         |    -7.86 | cbass, Gabe, Grave, jchancE, LaffyTs |
|           11 |      836 | 2024-12-15 | Alter Iron Club      | L   | 0.447      | -            | -                | -                | -         |    -5.90 | cbass, Champ, Grave, jchancE, z0mb1e |
|           10 |      860 | 2024-12-14 | Undone               | L   | 0.441      | -            | -                | -                | -         |    -5.13 | cbass, Champ, Grave, jchancE, z0mb1e |
|            9 |      888 | 2024-12-13 | LAG Gaming           | W   | 0.434      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.39 | cbass, Champ, Grave, jchancE, z0mb1e |
|            8 |      907 | 2024-12-12 | Chicken Coop Esports | W   | 0.427      | 0.143        | 0.006 (0.000)    | 0.095 (0.006)    | 0 (0.000) |     6.83 | cbass, Champ, Grave, jchancE, z0mb1e |
|            7 |      922 | 2024-12-11 | Undone               | L   | 0.421      | -            | -                | -                | -         |    -4.97 | cbass, Champ, Grave, jchancE, z0mb1e |
|            6 |      934 | 2024-12-10 | Chicken Coop Esports | W   | 0.414      | 0.143        | 0.006 (0.000)    | 0.095 (0.006)    | 0 (0.000) |     6.77 | cbass, Champ, Grave, jchancE, z0mb1e |
|            5 |      978 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.393      | -            | -                | -                | -         |    -4.97 | cbass, Champ, Grave, jchancE, z0mb1e |
|            4 |      982 | 2024-12-07 | Sharks Esports       | L   | 0.393      | -            | -                | -                | -         |    -2.06 | cbass, Champ, Grave, jchancE, z0mb1e |
|            3 |     1008 | 2024-12-06 | Not Mythic           | W   | 0.387      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.387) |     2.54 | cbass, Champ, Grave, jchancE, z0mb1e |
|            2 |     2007 | 2024-10-09 | LAG Gaming           | L   | 0.000      | -            | -                | -                | -         |    -0.01 | cbass, Champ, Grave, jchancE, z0mb1e |
|            1 |     2016 | 2024-10-09 | LAG Gaming           | W   | 0.000      | 0.477        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.00 | cbass, Champ, Grave, jchancE, z0mb1e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29.11)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $400.00        | $29.11          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
