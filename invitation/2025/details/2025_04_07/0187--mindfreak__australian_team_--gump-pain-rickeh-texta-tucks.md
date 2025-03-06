### Roster Details<br />
Team Name: Mindfreak (Australian team)<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Global Rank: [187](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  582.7<br />
<br />
Final Rank Value (582.7) = Starting Rank Value (617.2) + Head To Head Adjustments (-34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 617.2
- 400 + ( ( 0.105 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 617.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      415 | 2025-02-08 | Chinggis Warriors | L   | 0.814      | -            | -                | -                | -         |    -9.29 | gump, pain, Rickeh, Texta, tucks |
|           10 |      480 | 2025-02-07 | Believe.          | L   | 0.808      | -            | -                | -                | -         |   -16.57 | gump, pain, Rickeh, Texta, tucks |
|            9 |     1450 | 2024-11-15 | Los kogutos       | L   | 0.244      | -            | -                | -                | -         |    -2.00 | gump, pain, Rickeh, Texta, tucks |
|            8 |     1462 | 2024-11-15 | Team Canada       | W   | 0.243      | 0.617        | 0.000 (0.000)    | 0.019 (0.003)    | 1 (0.243) |     1.97 | gump, pain, Rickeh, Texta, tucks |
|            7 |     1472 | 2024-11-14 | Team Turkey       | L   | 0.239      | -            | -                | -                | -         |    -4.22 | gump, pain, Rickeh, Texta, tucks |
|            6 |     1516 | 2024-11-13 | Team Norway       | L   | 0.231      | -            | -                | -                | -         |    -4.40 | gump, pain, Rickeh, Texta, tucks |
|            5 |     1519 | 2024-11-13 | Metizport         | L   | 0.230      | -            | -                | -                | -         |    -0.96 | gump, pain, Rickeh, Texta, tucks |
|            4 |     1852 | 2024-10-19 | FlyQuest          | L   | 0.068      | -            | -                | -                | -         |    -0.37 | gump, pain, Rickeh, Texta, tucks |
|            3 |     1870 | 2024-10-19 | Housebets         | W   | 0.062      | 0.333        | 0.000 (0.000)    | 0.143 (0.003)    | 0 (0.000) |     0.93 | gump, pain, Rickeh, Texta, tucks |
|            2 |     1894 | 2024-10-18 | FlyQuest          | L   | 0.055      | -            | -                | -                | -         |    -0.30 | gump, pain, Rickeh, Texta, tucks |
|            1 |     1919 | 2024-10-17 | Only One Word     | W   | 0.049      | 0.333        | 0.000 (0.000)    | 0.225 (0.004)    | 0 (0.000) |     0.72 | gump, pain, Rickeh, Texta, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($136.11)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $2,000.00      | $136.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
