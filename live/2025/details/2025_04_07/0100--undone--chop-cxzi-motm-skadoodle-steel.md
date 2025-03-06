### Roster Details<br />
Team Name: Undone<br />
Roster: chop, cxzi, motm, Skadoodle, steel<br />
Global Rank: [100](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [19]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  744.2<br />
<br />
Final Rank Value (744.2) = Starting Rank Value (738.4) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.4
- 400 + ( ( 0.164 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 738.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      860 | 2024-12-14 | Bad News Capybaras | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.101 (0.006)    | 0 (0.000) |     5.13 | chop, cxzi, motm, Skadoodle, steel |
|           11 |      887 | 2024-12-13 | Alter Iron Club    | W   | 0.434      | 0.143        | 0.008 (0.000)    | 0.292 (0.018)    | 0 (0.000) |     6.14 | chop, cxzi, motm, Skadoodle, steel |
|           10 |      922 | 2024-12-11 | Bad News Capybaras | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.101 (0.006)    | 0 (0.000) |     4.97 | chop, cxzi, motm, Skadoodle, steel |
|            9 |      933 | 2024-12-10 | InControl          | W   | 0.414      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.80 | chop, cxzi, motm, Skadoodle, steel |
|            8 |      962 | 2024-12-08 | Nouns Esports      | L   | 0.398      | -            | -                | -                | -         |    -5.02 | chop, cxzi, motm, steel, taggy     |
|            7 |      971 | 2024-12-07 | MIGHT              | W   | 0.394      | 0.384        | 0.000 (0.000)    | 0.269 (0.041)    | 1 (0.394) |     5.44 | chop, cxzi, motm, steel, taggy     |
|            6 |      977 | 2024-12-07 | Fisher College     | W   | 0.393      | 0.384        | 0.002 (0.000)    | 0.053 (0.008)    | 1 (0.393) |     5.23 | chop, cxzi, motm, steel, taggy     |
|            5 |      980 | 2024-12-07 | NRG                | L   | 0.393      | -            | -                | -                | -         |    -2.98 | chop, cxzi, motm, steel, taggy     |
|            4 |     1001 | 2024-12-06 | Anti-Eco Club      | W   | 0.388      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.388) |     1.72 | chop, cxzi, motm, steel, taggy     |
|            3 |     1031 | 2024-12-05 | Alter Iron Club    | L   | 0.381      | -            | -                | -                | -         |    -6.64 | chop, cxzi, motm, Skadoodle, steel |
|            2 |     1104 | 2024-12-02 | Make Your Mind     | L   | 0.361      | -            | -                | -                | -         |    -6.30 | chop, cxzi, motm, Skadoodle, steel |
|            1 |     1275 | 2024-11-23 | BOSS               | L   | 0.299      | -            | -                | -                | -         |    -3.69 | chop, cxzi, motm, Skadoodle, steel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.87)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.401 | $1,250.00      | $500.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
