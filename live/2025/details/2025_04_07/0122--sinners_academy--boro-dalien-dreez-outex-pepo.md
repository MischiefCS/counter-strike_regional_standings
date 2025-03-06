### Roster Details<br />
Team Name: SINNERS Academy<br />
Roster: BORO, DALIEN, dreez, outex, Pepo<br />
Global Rank: [122](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  691.3<br />
<br />
Final Rank Value (691.3) = Starting Rank Value (698.6) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.6
- 400 + ( ( 0.144 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 698.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1315 | 2024-11-22 | BRUTE               | L   | 0.290      | -            | -                | -                | -         |    -4.84 | BORO, DALIEN, dreez, outex, Pepo |
|            5 |     1454 | 2024-11-15 | Dusty Roots         | L   | 0.243      | -            | -                | -                | -         |    -3.38 | BORO, DALIEN, outex, Pepo, STYKO |
|            4 |     1461 | 2024-11-15 | Partizan Esports    | W   | 0.243      | 0.617        | 0.075 (0.011)    | 0.480 (0.072)    | 1 (0.243) |     6.43 | BORO, DALIEN, outex, Pepo, STYKO |
|            3 |     1470 | 2024-11-14 | Kitsune Esports     | W   | 0.239      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.239) |     1.21 | BORO, DALIEN, outex, Pepo, STYKO |
|            2 |     1507 | 2024-11-13 | Team Czech Republic | L   | 0.232      | -            | -                | -                | -         |    -4.83 | BORO, DALIEN, outex, Pepo, STYKO |
|            1 |     1510 | 2024-11-13 | The Huns Esports    | L   | 0.231      | -            | -                | -                | -         |    -1.94 | BORO, DALIEN, outex, Pepo, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($187.13)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.303 | $616.62        | $187.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
